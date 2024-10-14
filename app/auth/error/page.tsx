import CardWrapper from "@/components/auth/card-wrapper";

export default function AuthErrorPage() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong."
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <></>
    </CardWrapper>
  );
}
