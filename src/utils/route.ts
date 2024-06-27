export const getContentByRoute = (route: string) => {
  switch (route) {
    case "hello":
      return {
        imagePath: "/assests/lock.png",
        heading: "To reset your password click on the button below.",
        buttonLabel: "Reset Password",
        buttonRoute: "/email",
        headerText: "Hello !",
      };
    case "email":
      return {
        imagePath: "/assests/mail.png",
        heading: "Test ",
        buttonLabel: "",
        buttonRoute: "/2fa",
        headerText: "Latter from Gato Scan!",
      };
    case "verify":
      return {
        imagePath: "/assests/puzzle.png",
        heading: "Please reset your password by clicking the button below.",
        buttonLabel: "Verify Email",
        headerText: "Welcome to GATO ECOSYSTEM",
        buttonRoute: "/hello",
      };
    case "2fa":
      return {
        imagePath: "/assests/star.png",
        heading:
          "You are trying to perform an action that requires confirmation code. Copy the code below and paste it into the corresponding form to continue..",
        buttonLabel: "1sjYUk",
        headerText: "2FA Code!",
        buttonRoute: "/",
      };
    default:
      return {
        imagePath: "/assests/puzzle.png",
        heading: "Please reset your password by clicking the button below.",
        buttonLabel: "Verify Email Default",
        headerText: "Welcome to GATO ECOSYSTEM",
        buttonRoute: "/hello",
      };
  }
};
