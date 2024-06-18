import { UserInformation } from "./types";
import { capitalize, formatPhoneNumber } from "./utils/transformations";

export const InfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};

interface ProfileInformationProps {
  userInfo: UserInformation;
}

export const ProfileInformation = ({ userInfo }: ProfileInformationProps) => {
  const { firstName, lastName, email, city, phone, formSubmitted } = userInfo;

  if (!userInfo || !formSubmitted) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }

  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="Email" value={email} />
        <InfoRow label="First Name" value={capitalize(firstName)} />
        <InfoRow label="Last Name" value={capitalize(lastName)} />
        <InfoRow label="City" value={city} />
        <InfoRow label="Phone" value={formatPhoneNumber(phone.join(""))} />
      </div>
    </>
  );
};
