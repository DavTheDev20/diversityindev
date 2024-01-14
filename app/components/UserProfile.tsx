export default function UserProfile({
  userName,
  userImage,
}: {
  userName: string;
  userImage: string;
}) {
  return (
    <div className="flex items-center">
      <img src={userImage} width={45} className="mr-2 bg-white rounded-full" />
      <h3 className="text-base text-white font-semibold">{userName}</h3>
    </div>
  );
}
