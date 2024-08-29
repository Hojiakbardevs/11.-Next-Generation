import { ButtonEnter } from "../Head/button_enter";

export const FooterPage = () => {
  return <div className="container footer my-48 flex  items-center justify-between">
    <div>
    <ButtonEnter></ButtonEnter>
    </div>
    <div>
        <ul className="flex gap-28">
            <li>Dekks
                <ul className="text-neutral-400">
                    <li>Product</li>
                    <li>Plans</li>
                    <li>Blog</li>
                </ul>
            </li>
            <li>Company
                <ul className="text-neutral-400">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
            </li>
            <li>Legal
                <ul className="text-neutral-400">
                    <li>Cookies</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </li>
        </ul>
    </div>
  </div>;
};
