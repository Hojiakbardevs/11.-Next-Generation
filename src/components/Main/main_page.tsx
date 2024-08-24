export const MainPage = () => {
  return (
    <div className="flex gap-20 justify-end p-4">
      <p className="text-center text-sm bg-gray-400 px-4 py-0  flex items-center justify-center rounded-lg">
        By continuing to use this site you consent with our{" "}
        <span>cookie policy.</span>
      </p>
      <div className="flex items-center justify-center  bg-gray-400 size-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none">
          <g clip-path="url(#clip0_97_5868)">
            <path
              d="M21.6666 0.481445C22.6882 0.481445 23.6679 0.887264 24.3903 1.60963C25.1127 2.33199 25.5185 3.31172 25.5185 4.3333V17.7223C25.5185 18.7439 25.1127 19.7236 24.3903 20.446C23.6679 21.1684 22.6882 21.5742 21.6666 21.5742L7.91167 21.5732L1.99619 25.7082C1.8674 25.7979 1.71864 25.8547 1.56285 25.8738L1.44441 25.8815C1.2084 25.8815 0.980629 25.7947 0.804351 25.6378C0.628073 25.4809 0.515563 25.2647 0.488186 25.0303L0.481445 24.9186V4.3333C0.481445 3.31172 0.887264 2.33199 1.60963 1.60963C2.33199 0.887264 3.31172 0.481445 4.3333 0.481445H21.6666Z"
              fill="currentcolor"
            />
          </g>
          <defs>
            <clipPath id="clip0_97_5868">
              <rect width="26" height="26" fill="currentcolor" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    
  );
};
