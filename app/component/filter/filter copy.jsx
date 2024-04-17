import MyPage from "../productos/page";
import { useState } from 'react';

export default function Filter() {
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    const toggleFilterMenu = () => {
        setIsFilterMenuOpen(!isFilterMenuOpen);
    };

    return (
        <div className="flex">
            <div className={`perfect-scrollbar panel p-4 flex-none overflow-x-hidden max-w-xs w-full absolute xl:relative z-10 space-y-4 h-full ${isFilterMenuOpen ? 'block' : 'hidden'} xl:block sm:hidden`}>
            <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">Filters</h4>
        <button type="button" className="text-primary font-medium">Clear All</button>
      </div>
      <div className="h-px w-full border-b border-[#e0e6ed] dark:border-[#1b2e4b]"></div>
      <div>
        <h6 className="text-base font-bold pb-5">Products</h6>
        <ul className="space-y-1.5">
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="fashion" className="form-checkbox" />
              <label for="fashion" className="mb-0 cursor-pointer">Fashion</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="electronics" className="form-checkbox" />
              <label for="electronics" className="mb-0 cursor-pointer">Electronics</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="kids" className="form-checkbox" />
              <label for="kids" className="mb-0 cursor-pointer">Kids</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="grocery" className="form-checkbox" />
              <label for="grocery" className="mb-0 cursor-pointer">Grocery</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="kitchen" className="form-checkbox" />
              <label for="kitchen" className="mb-0 cursor-pointer">Kitchen</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="furniture" className="form-checkbox" />
              <label for="furniture" className="mb-0 cursor-pointer">Furniture</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="watches" className="form-checkbox" />
              <label for="watches" className="mb-0 cursor-pointer">Watches</label>
            </a>
          </li>
        </ul>
      </div>
      <div className="h-px w-full border-b border-[#e0e6ed] dark:border-[#1b2e4b]"></div>
      <div>
        <h6 className="text-base font-bold pb-5">Price</h6>
        <div>
          <input type="range" className="w-full py-2.5" min="0" max="100" x-model="slider3" />
          <div className="font-bold"> <span x-text="slider3" className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark"></span> <span>%</span></div>
        </div>
      </div>
      <div className="h-px w-full border-b border-[#e0e6ed] dark:border-[#1b2e4b]">
      </div>
      <div>
        <h6 className="text-base font-bold pb-5">Brands</h6>
        <ul className="space-y-1.5">
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="boat" className="form-checkbox" />
              <label for="boat" className="mb-0 cursor-pointer">Boat</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="apple" className="form-checkbox" />
              <label for="apple" className="mb-0 cursor-pointer">Apple</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="oneplus" className="form-checkbox" />
              <label for="oneplus" className="mb-0 cursor-pointer">Oneplus</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="redmi" className="form-checkbox" />
              <label for="redmi" className="mb-0 cursor-pointer">Redmi</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="samsung" className="form-checkbox" />
              <label for="samsung" className="mb-0 cursor-pointer">Samsung</label>
            </a>
          </li>
          <li>
            <a  className="inline-flex items-center gap-1">
              <input type="checkbox" id="oppo" className="form-checkbox" />
              <label for="oppo" className="mb-0 cursor-pointer">Oppo</label>
            </a>
          </li>
        </ul>
      </div>
      <div className="h-px w-full border-b border-[#e0e6ed] dark:border-[#1b2e4b]"></div>

            </div>
            {isFilterMenuOpen && <div className="bg-black/1 z-[5] w-full h-full absolute rounded-md" onClick={toggleFilterMenu}></div>}
            <div className="bg-black/1 z-[5] w-full h-full absolute rounded-md hidden sm:block"></div>
            <div className="panel flex-1 overflow-y-auto">
                <div className="sm:absolute sm:top-5 ltr:sm:left-5 rtl:sm:right-5 mb-5">
                    <div className="flex items-center justify-between relative gap-4">
                        <button type="button" className="xl:hidden hover:text-primary" onClick={toggleFilterMenu}>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                    {/* Icono de filtro */}
                                </svg>
                                <strong>Filtro</strong>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="product-table">
                    <MyPage />
                </div>
            </div>
        </div>
    );
}
