import { useRecoilState } from "recoil";
import { userState } from "../../utils/store";

export default function Heading() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={
            "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          }
          alt=""
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 md:flex">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 flex-1">
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900 sm:hidden">
                XXXXHi, {user.name}!
              </h1>
            </div>
            <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"></div>
          </div>
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={user.imageUrl}
              alt=""
            />
          </div>
        </div>
        <div className="mt-6 min-w-0 flex-1 sm:block md:hidden lg:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            Hi, {user.name}!
          </h1>
        </div>
      </div>
    </div>
  );
}
