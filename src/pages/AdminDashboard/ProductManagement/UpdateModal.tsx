import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaRegEdit } from 'react-icons/fa';
import UpdateProduct from './UpdateProduct';

interface UpdateModalProps {
  productId: string;
}

export default function UpdateModal({ productId }: UpdateModalProps) {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsShowing(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');

    if (html) {
      if (isShowing) {
        html.style.overflowY = 'hidden';

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const modal = document.querySelector('#modal') as HTMLElement | null;

        if (!modal) return;

        const focusableContent =
          modal.querySelectorAll<HTMLElement>(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement =
          focusableContent[focusableContent.length - 1];

        function handleKeyDown(e: KeyboardEvent) {
          if (e.key === 'Escape') {
            setIsShowing(false);
          }

          if (e.key === 'Tab') {
            if (e.shiftKey) {
              // Shift + Tab
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              // Tab
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        }

        document.addEventListener('keydown', handleKeyDown);
        firstFocusableElement?.focus();

        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      } else {
        html.style.overflowY = 'visible';
      }
    }
  }, [isShowing]);

  return (
    <>
      <button onClick={() => setIsShowing(true)}>
        <span>
          <FaRegEdit className="text-emerald-500" />
        </span>
      </button>

      {isShowing &&
        typeof document !== 'undefined' &&
        ReactDOM.createPortal(
          <div
            className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
            aria-labelledby="header-2a content-2a"
            aria-modal="true"
            tabIndex={-1}
            role="dialog"
          >
            {/*    <!-- Modal --> */}
            <div
              className="flex flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
              ref={wrapperRef}
              id="modal"
              role="document"
            >
              {/*        <!-- Modal header --> */}
              <header id="header-2a" className="flex items-center gap-4">
                <h3 className="flex-1 text-xl font-medium text-slate-700">
                  Update Product
                </h3>
                <button
                  onClick={() => setIsShowing(false)}
                  className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                  aria-label="close dialog"
                >
                  <span className="relative only:-mx-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      role="graphics-symbol"
                      aria-labelledby="title-79 desc-79"
                    >
                      <title id="title-79">Icon title</title>
                      <desc id="desc-79">
                        A more detailed description of the icon
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </header>
              {/*        <!-- Modal body --> */}
              <div id="content-2a" className="flex-1 overflow-auto">
                <UpdateProduct productId={productId} />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
