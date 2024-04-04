import visa from "../../public/visa.png";
import mastercard from "../../public/mastercard.png";
import gpay from "../../public/gpay.png";
import Divider from "./Divider";

export default function Footer() {
  return (
    <footer className="bg-slate-200 px-[8%]">
      <div className="flex pt-12">
        <div className="w-[23%]">
          <h2 className="mb-5 w-[33%] text-start text-xl font-bold tracking-wider sm:text-2xl md:text-2xl">
            VogueHub
          </h2>
          <p className="tracking-wide text-stone-500">
            We provide money back guarantee if the product is no original
          </p>
        </div>

        <div className="flex w-[60%] justify-evenly">
          <div className="">
            <h2 className="mb-6 text-xl font-semibold tracking-wider ">Shop</h2>
            <p className="mb-2 tracking-wide text-stone-500">All collection</p>
            <p className="mb-2 tracking-wide text-stone-500">Winter Edition</p>
            <p className="mb-2 tracking-wide text-stone-500">Discounts</p>
          </div>

          <div className="">
            <h2 className="mb-6 text-xl font-semibold tracking-wider ">
              Company
            </h2>
            <p className="mb-2 tracking-wide text-stone-500">About us</p>
            <p className="mb-2 tracking-wide text-stone-500">Contact</p>
            <p className="mb-2 tracking-wide text-stone-500">Affliates</p>
          </div>

          <div className="">
            <h2 className="mb-6 text-xl font-semibold tracking-wider ">
              Support
            </h2>
            <p className="mb-2 tracking-wide text-stone-500">FAQs</p>
            <p className="mb-2 tracking-wide text-stone-500">Cookie Policy</p>
            <p className="mb-2 tracking-wide text-stone-500">Terms of Use</p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold tracking-wider ">
            Payment Methods
          </h2>
          <div className="flex justify-between">
            <img src={visa} alt="visa-icon" className="h-10 object-cover" />
            <img
              src={mastercard}
              alt="visa-icon"
              className="h-10 object-cover"
            />
            <img src={gpay} alt="visa-icon" className="h-10 object-cover" />
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <p className="pb-12 text-center tracking-wide text-stone-500">
          Copyright © 2024 VogueHub. All rights reserved
        </p>
      </div>
    </footer>
  );
}
