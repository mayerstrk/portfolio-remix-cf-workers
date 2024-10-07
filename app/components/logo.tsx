import { NavLink } from "@remix-run/react";
import Mstark from "~/svg-components/mstark";
import RealBjorn from "~/svg-components/real-bjorn";

export default function Logo() {
  return (
    <NavLink to='/'>
      <figure className='align-center flex gap-4 fill-content stroke-content'>
        <RealBjorn />
        <Mstark />
      </figure>
    </NavLink>
  );
}
