import Link from "next/link"
import ProductBox from "./ProductBox"

export default function ProductTabs({ tabList, tabPanel }) {

    return (
        <section className="food_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        منو محصولات
                    </h2>
                </div>
                {console.log(tabList)}

                <ul className="filters_menu">
                    {tabList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div className="filters-content">
                    {tabPanel.map((panel, index) => (
                        <div key={index} className="row grid">
                            {panel.map((product) => (
                                <div key={product.id} className="col-sm-6 col-lg-4">
                                    <ProductBox product={product} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="btn-box">
                    <Link href="/menu">
                        مشاهده بیشتر
                    </Link>
                </div>

            </div>
        </section>
    )
}