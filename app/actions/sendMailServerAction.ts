"use server";

export async function sendMessageServerAction(
  previousState: any,
  formData: FormData
) {
  // Validate inputs first
  const fullname = (formData.get("fullname") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // validate fullname
  if (fullname?.length <= 2) {
    return {
      fullnameError:
        "Wow, your name seems to be in stealth mode! 😄 How about unleashing the full version this time?",
    };
  }

  // validate email using regex
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return {
      emailError:
        "Oops! Looks like your email just threw a curveball at my regex skills 😅. Let's give it another shot—what do you say?",
    };
  }

  // validate message
  if (message?.length <= 10) {
    return {
      messageError: "That's a bit brief! 😅 Let it flow—share the whole story!",
    };
  }

  // If validation passes, simulate email sending
  try {
    // Log the message data for now (you can remove this later)
    console.log("Contact form submission:", {
      fullname,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time (optional)
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: "Message received successfully! I'll get back to you soon. 🤖",
    };
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return {
      error: "Something went wrong, please try again later. 🤖",
    };
  }
}
