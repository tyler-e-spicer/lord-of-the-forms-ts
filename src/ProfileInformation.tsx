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
  userInfo: UserInformation | null;
}

export const ProfileInformation = ({ userInfo }: ProfileInformationProps) => {
  if (!userInfo) {
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

  const { firstName, lastName, email, city, phone } = userInfo;

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
