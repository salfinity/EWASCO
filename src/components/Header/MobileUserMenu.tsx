"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";
import Avatar from "./Avatar";
import { SafeUser } from "../../app/types";
import useLoginModal from "../../app/hooks/useLoginModal";
import useRentModal from "../../app/hooks/useRentModal";
import useRegisterModal from "../../app/hooks/useRegisterModal";

interface MobileUserMenuProps {
  currentUser?: SafeUser | null;
}

const MobileUserMenu: React.FC<MobileUserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return (
    <div className="relative">
      <div className="flex ml-8 flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            block
            md:hidden
            text-sm 
            font-semibold 
            py-3 
            px-4 
            text-black
            rounded-full
            bg-purple-400 
            hover:bg-purple-600 
            transition 
            cursor-pointer
          "
        >
          My Water acc.
        </div>
        <div
          onClick={toggleOpen}
          className="
          px-4
          py-2
          md:py-1
          md:px-2
          border-[1px] 
          text-black 
          border-neutral-700
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw] 
            z-50
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem label="List your home" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="LogIn" onClick={loginModal.onOpen} />
                <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileUserMenu;
