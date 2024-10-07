import React, { useRef } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import useFetchMenu from "../hooks/useFetchMenu";
import useTotalProductCount from "../hooks/useTotalProduct";

const Menu = () => {
  const op = useRef<OverlayPanel>(null);
  const navigate = useNavigate();
  const { menu, loading } = useFetchMenu();
  const totalCount = useTotalProductCount();

  return (
    <>
      <div className="bg-cyan-100 fixed flex justify-content-between p-3 w-full wrap top-0">
        <div className="card w-full flex justify-content-between">
          <Button
            type="button"
            icon="pi pi-list"
            label="Menu"
            onClick={(e) => op.current !== null && op.current.toggle(e)}
          />
          <div className="relative">
            <Button
              type="button"
              icon="pi pi-shopping-cart"
              label="Cart"
              onClick={() => {
                navigate("/checkout");
              }}
            />
            {totalCount < 1 ? (
              ""
            ) : (
              <span
                className="absolute bg-cyan-300 border-circle border-cyan-100 font-bold px-2 text-primary-100"
                style={{
                  left: "-10px",
                  top: "-10px",
                }}
              >
                {totalCount}
              </span>
            )}
          </div>
          <OverlayPanel ref={op}>
            <div className="wrap-menu w-full">
              <div className="grid">
                <div className="col-12 flex justify-content-center">
                  {menu?.name && <h3 className="m-0">{menu.name}</h3>}
                </div>
                <div className="col-7 flex">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    menu?.children?.map((child: any, index: number) => (
                      <div className="flex justify-content-center" key={index}>
                        <ul>
                          <h6>{child.name}</h6>
                          {child.categories.map(
                            (category: any, catIndex: number) => (
                              <li key={catIndex}>{category}</li>
                            )
                          )}
                        </ul>
                      </div>
                    ))
                  )}
                </div>
                <div className="col-5">
                  {menu?.img && (
                    <img className="w-full" src={menu.img} alt="" />
                  )}
                </div>
              </div>
            </div>
          </OverlayPanel>
        </div>
      </div>
    </>
  );
};

export default Menu;
