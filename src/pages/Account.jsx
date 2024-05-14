import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDateForm from "../features/authentication/UpdateUserDataForm";
import UpdatePassWordForm from "../features/authentication/UpdatePassWordForm";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDateForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePassWordForm />
      </Row>
    </>
  );
}

export default Account;
