declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayConfig {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  orderId: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    [key: string]: string;
  };
  theme: {
    color: string;
  };
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const initializeRazorpay = async (config: RazorpayConfig) => {
  const isLoaded = await loadRazorpayScript();

  if (!isLoaded) {
    throw new Error("Failed to load Razorpay SDK");
  }

  return new window.Razorpay({
    ...config,
    handler: async (response: any) => {
      try {
        // Verify payment
        const result = await fetch("/api/payments/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        if (!result.ok) {
          throw new Error("Payment verification failed");
        }

        // Handle success (redirect to success page, update order status, etc.)
        window.location.href = `/orders/success?orderId=${config.orderId}`;
      } catch (error) {
        console.error("Payment verification error:", error);
        // Handle error (redirect to failure page, show error message, etc.)
        window.location.href = `/orders/failed?orderId=${config.orderId}`;
      }
    },
    modal: {
      ondismiss: () => {
        console.log("Payment cancelled");
      },
    },
  });
};

export const createRazorpayOrder = async (
  amount: number,
  currency: string = "INR"
) => {
  try {
    const response = await fetch("/api/payments/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, currency }),
    });

    if (!response.ok) {
      throw new Error("Failed to create order");
    }

    return await response.json();
  } catch (error) {
    console.error("Create order error:", error);
    throw error;
  }
};
