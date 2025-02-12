// In a real app, you would use a proper SMS service like Twilio, MSG91, etc.
// This is a demo implementation that stores OTPs in file system for development
import fs from "fs";
import path from "path";

interface OTPRecord {
  otp: string;
  expiresAt: number;
  verified: boolean;
}

const OTP_DIR = path.join(process.cwd(), ".otp-store");

// Ensure OTP directory exists
if (!fs.existsSync(OTP_DIR)) {
  fs.mkdirSync(OTP_DIR, { recursive: true });
}

function getOTPPath(phone: string): string {
  return path.join(OTP_DIR, `${phone}.json`);
}

function getStoredOTPRecord(phone: string): OTPRecord | null {
  const otpPath = getOTPPath(phone);
  if (!fs.existsSync(otpPath)) {
    return null;
  }
  try {
    const data = fs.readFileSync(otpPath, "utf8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

// Generate a random 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Store an OTP with 5 minutes expiry
function storeOTP(phone: string, otp: string): void {
  const otpRecord: OTPRecord = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
    verified: false,
  };
  fs.writeFileSync(getOTPPath(phone), JSON.stringify(otpRecord));
}

// Send OTP (simulated)
export async function sendOTP(
  phone: string
): Promise<{ success: boolean; error?: string; otp?: string }> {
  try {
    // Validate phone number
    if (!phone.match(/^\d{10}$/)) {
      return {
        success: false,
        error: "Invalid phone number. Please enter a 10-digit number.",
      };
    }

    try {
      const otp = generateOTP();
      storeOTP(phone, otp);
      // prompt(`OTP for ${phone}: ${otp}`);
      console.log(`[DEV] OTP for ${phone}: ${otp}`);
      // In a real app, you would send the OTP via SMS here

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return { success: true, otp: otp };
    } catch (e) {
      throw new Error("Failed to generate OTP - " + e);
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    return {
      success: false,
      error: "Failed to send OTP. Please try again.",
      otp: "none",
    };
  }
}

// Verify OTP
export function verifyOTP(
  phone: string,
  otp: string
): {
  success: boolean;
  error?: string;
} {
  const record = getStoredOTPRecord(phone);

  if (!record) {
    return {
      success: false,
      error: "No OTP found. Please request a new one.",
    };
  }

  if (record.verified) {
    return {
      success: false,
      error: "OTP already used. Please request a new one.",
    };
  }

  if (Date.now() > record.expiresAt) {
    clearOTP(phone);
    return {
      success: false,
      error: "OTP expired. Please request a new one.",
    };
  }

  if (record.otp !== otp) {
    return {
      success: false,
      error: "Invalid OTP. Please try again.",
    };
  }

  // Mark OTP as verified
  record.verified = true;
  fs.writeFileSync(getOTPPath(phone), JSON.stringify(record));

  return { success: true };
}

// Clear OTP after successful verification or manual clear
export function clearOTP(phone: string): void {
  const otpPath = getOTPPath(phone);
  if (fs.existsSync(otpPath)) {
    fs.unlinkSync(otpPath);
  }
}

// For development: Get stored OTP (remove in production)
export function __DEV__getStoredOTP(phone: string): string | null {
  const record = getStoredOTPRecord(phone);
  return record?.otp || null;
}
