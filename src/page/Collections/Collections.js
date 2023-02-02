import classNames from "classnames/bind";
import ProductItem from "~/component/ProductItem/ProductItem";
import {products} from "~/data";
import styles from "./Collections.module.scss";
import Product from "./Product";

const cx = classNames.bind(styles);
function Collections() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          src="https://file.hstatic.net/1000003969/file/bnm_e4bd23715b5a48998966250463001191.jpg"
          alt=""
        />
      </div>
      <div className={cx("body")}>
        <p className={cx("introduce")}>
          Những chiếc túi kem thời trang, đầy cảm hứng từ nhiều sắc màu ngọt ngào và xu hướng thời
          trang hè 2021, SUMMER TASTE COLLECTION là sự kết hợp mới nhất của JUNO & Miu Lê để mang
          đến thông điệp: Hãy gạt đi những bận rộn, tận hưởng những trải nghiệm & hương vị mùa hè
          khi đang độ rực rỡ nhất.
        </p>
        <div className={cx("img-box")}>
          <img
            src="https://file.hstatic.net/1000003969/file/1_4f38445bcb79465e85c7843996941bf2.jpg"
            alt=""
          />
          <img
            src="https://file.hstatic.net/1000003969/file/2_284caeb45fdc41d090ea7b6e1fe62164.jpg"
            alt=""
          />
        </div>
        <div className={cx("img-box")}>
          <img
            src="https://file.hstatic.net/1000003969/file/3_7a75c7af75ef4c5481648d05ff62537c.jpg"
            alt=""
          />
          <div className={cx("img-box-child")}>
            <img
              src="https://file.hstatic.net/1000003969/file/kham-pha-sac-kem_a625cb01408a40d792d4b28845004cbf.jpg"
              alt=""
            />
            <div className={cx("product-list")}>
              <Product
                data={{
                  image:
                    "https://file.hstatic.net/1000003969/file/1_a8b89d3927e94649905d993548812151.jpg",
                  name: "Handy Sweetest Clutch",
                  cost: "595,000₫",
                }}
              />
              <Product
                data={{
                  image:
                    "https://file.hstatic.net/1000003969/file/2_f790634cb73249ae9561f40158d22383.jpg",
                  name: "Waffle-Y-Cute",
                  cost: "595,000₫",
                }}
              />
            </div>
          </div>
        </div>
        <div className={cx("img-box")}>
          <img
            src="https://file.hstatic.net/1000003969/file/5_4d92a61fb88549ae86e55f05ce3bf376.jpg"
            alt=""
          />
          <img
            src="https://file.hstatic.net/1000003969/file/6_b4333f9405874c29858ef977fbfeabd7.jpg"
            alt=""
          />
        </div>
        <div className={cx("product-box")}>
          <Product
            data={{
              image:
                "https://file.hstatic.net/1000003969/file/3_a42303ad94144a38a22dfd7baf9539d7.jpg",
              name: "Frost Bites Crumbly",
              cost: "795,000₫",
            }}
          />
          <Product
            data={{
              image:
                "https://file.hstatic.net/1000003969/file/4_af8b892de715430b8f0c438b01bdad2c.jpg",
              name: "Jumping Snowflakes",
              cost: "555,000₫",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Collections;
