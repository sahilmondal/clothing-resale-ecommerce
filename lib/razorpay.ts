import { loadScript } from "@/lib/utils";

declare global {
  interface Window {
    Razorpay: RazorpayConstructor;
  }
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}

interface RazorpayInstance {
  open(): void;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact?: string;
  };
  handler: (response: PaymentSuccessResponse) => void;
  modal: {
    ondismiss: () => void;
  };
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
}

export interface PaymentSuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface CreateOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
}

// Function to load Razorpay script
export const loadRazorpayScript = async (): Promise<void> => {
  return loadScript("https://checkout.razorpay.com/v1/checkout.js");
};

// Function to create order on the server
export const createRazorpayOrder = async (
  amount: number
): Promise<CreateOrderResponse> => {
  const response = await fetch("/api/payments/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  return response.json();
};

// Function to verify payment on the server
export const verifyPayment = async (
  paymentData: PaymentSuccessResponse
): Promise<{ success: boolean }> => {
  const response = await fetch("/api/payments/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    throw new Error("Payment verification failed");
  }

  return response.json();
};

// Function to initialize Razorpay checkout
export const initializeRazorpayCheckout = async ({
  orderDetails,
  userDetails,
  onSuccess,
  onError,
}: {
  orderDetails: CreateOrderResponse;
  userDetails: {
    name: string;
    email: string;
    contact?: string;
  };
  onSuccess: (response: PaymentSuccessResponse) => void;
  onError: (error: Error) => void;
}): Promise<void> => {
  try {
    await loadRazorpayScript();

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      amount: orderDetails.amount,
      currency: orderDetails.currency,
      name: "Clothing Resale",
      description: "Purchase Payment",
      order_id: orderDetails.orderId,
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.contact,
      },
      handler: function (response: PaymentSuccessResponse) {
        onSuccess(response);
      },
      modal: {
        ondismiss: function () {
          onError(new Error("Payment cancelled by user"));
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    onError(
      error instanceof Error ? error : new Error("Failed to initialize payment")
    );
  }
};
