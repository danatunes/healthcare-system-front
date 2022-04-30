import clsx from "clsx";

const Loader = ({ position, text, className }) => {
  const classList = clsx(
    {
      [`absolute inset-0 items-center justify-center flex z-20 bg-gray-300 bg-opacity-25 rounded-md`]:
        position === "absolute",
    },
    {
      [`fixed inset-0 items-center justify-center flex z-20 bg-gray-300 bg-opacity-25 rounded-md`]:
        position === "fixed",
    },
    { [`flex items-center justify-center h-full`]: !position },
    { [`flex-col`]: text },
    { [`${className}`]: className }
  );

  return (
    <div className={classList}>
      <svg
        className="animate-spin select-none fill-current"
        width="64"
        height="64"
        viewBox="0 0 64 64"
      >
        <path
          d="M33.9201 18.432C33.9201 16.7354 33.0605 15.36 32.0001 15.36C30.9397 15.36 30.0801 16.7354 30.0801 18.432V19.968C30.0801 21.6646 30.9397 23.04 32.0001 23.04C33.0605 23.04 33.9201 21.6646 33.9201 19.968V18.432Z"
          fill="#3D50DF"
        />
        <path
          d="M40.447 21.2097C41.2953 19.7404 41.2386 18.1195 40.3202 17.5893C39.4019 17.0591 37.9698 17.8204 37.1215 19.2897L36.3535 20.6199C35.5052 22.0892 35.5619 23.7102 36.4802 24.2404C37.3986 24.7705 38.8307 24.0092 39.679 22.5399L40.447 21.2097Z"
          fill="#3D50DF"
          fillOpacity="0.1"
        />
        <path
          d="M44.7105 26.8789C46.1798 26.0306 46.9411 24.5984 46.4109 23.6801C45.8807 22.7618 44.2598 22.705 42.7905 23.5533L41.4603 24.3213C39.991 25.1696 39.2297 26.6018 39.7599 27.5201C40.29 28.4384 41.911 28.4952 43.3803 27.6469L44.7105 26.8789Z"
          fill="#3D50DF"
          fillOpacity="0.2"
        />
        <path
          d="M45.5679 33.92C47.2645 33.92 48.6399 33.0604 48.6399 32C48.6399 30.9396 47.2645 30.08 45.5679 30.08H44.0319C42.3353 30.08 40.9599 30.9396 40.9599 32C40.9599 33.0604 42.3353 33.92 44.0319 33.92H45.5679Z"
          fill="#3D50DF"
          fillOpacity="0.3"
        />
        <path
          d="M42.7904 40.4468C44.2597 41.2951 45.8807 41.2383 46.4109 40.32C46.941 39.4017 46.1797 37.9695 44.7104 37.1212L43.3802 36.3532C41.9109 35.5049 40.29 35.5617 39.7598 36.48C39.2296 37.3983 39.9909 38.8305 41.4602 39.6788L42.7904 40.4468Z"
          fill="#3D50DF"
          fillOpacity="0.4"
        />
        <path
          d="M37.1209 44.7101C37.9692 46.1794 39.4013 46.9408 40.3197 46.4106C41.238 45.8804 41.2947 44.2594 40.4464 42.7901L39.6784 41.4599C38.8301 39.9906 37.398 39.2293 36.4797 39.7595C35.5613 40.2897 35.5046 41.9106 36.3529 43.3799L37.1209 44.7101Z"
          fill="#3D50DF"
          fillOpacity="0.5"
        />
        <path
          d="M30.0799 45.568C30.0799 47.2646 30.9395 48.64 31.9999 48.64C33.0603 48.64 33.9199 47.2646 33.9199 45.568V44.032C33.9199 42.3354 33.0603 40.96 31.9999 40.96C30.9395 40.96 30.0799 42.3354 30.0799 44.032V45.568Z"
          fill="#3D50DF"
          fillOpacity="0.6"
        />
        <path
          d="M23.553 42.7902C22.7047 44.2595 22.7614 45.8804 23.6798 46.4106C24.5981 46.9408 26.0302 46.1795 26.8785 44.7102L27.6465 43.38C28.4948 41.9107 28.4381 40.2897 27.5198 39.7595C26.6014 39.2293 25.1693 39.9907 24.321 41.46L23.553 42.7902Z"
          fill="#3D50DF"
          fillOpacity="0.7"
        />
        <path
          d="M19.2895 37.1211C17.8202 37.9694 17.0589 39.4016 17.5891 40.3199C18.1193 41.2382 19.7402 41.295 21.2095 40.4467L22.5397 39.6787C24.009 38.8303 24.7703 37.3982 24.2401 36.4799C23.71 35.5616 22.089 35.5048 20.6197 36.3531L19.2895 37.1211Z"
          fill="#3D50DF"
          fillOpacity="0.8"
        />
        <path
          d="M18.4321 30.08C16.7355 30.08 15.3601 30.9396 15.3601 32C15.3601 33.0604 16.7355 33.92 18.4321 33.92H19.9681C21.6647 33.92 23.0401 33.0604 23.0401 32C23.0401 30.9396 21.6647 30.08 19.9681 30.08H18.4321Z"
          fill="#3D50DF"
          fillOpacity="0.9"
        />
        <path
          d="M21.2096 23.5532C19.7403 22.7049 18.1193 22.7617 17.5891 23.68C17.059 24.5983 17.8203 26.0305 19.2896 26.8788L20.6198 27.6468C22.0891 28.4951 23.71 28.4383 24.2402 27.52C24.7704 26.6017 24.0091 25.1695 22.5398 24.3212L21.2096 23.5532Z"
          fill="#3D50DF"
        />
        <path
          d="M26.8791 19.2897C26.0308 17.8204 24.5987 17.0591 23.6803 17.5893C22.762 18.1195 22.7053 19.7404 23.5536 21.2097L24.3216 22.54C25.1699 24.0093 26.602 24.7706 27.5203 24.2404C28.4387 23.7102 28.4954 22.0893 27.6471 20.62L26.8791 19.2897Z"
          fill="#3D50DF"
        />
      </svg>
      <span className="font-bold text-indigo-700">{text}</span>
    </div>
  );
};

export default Loader;