import Button from "@/components/button"
import { characters } from "@/model"
import Image from "next/image"

export default async function Home() {
    const responseData = await characters()

    return (
        <main
            style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div>
                <section>
                    <h1>app routerによる検証</h1>
                </section>
                <section>
                    <Button />
                </section>
                <section
                    style={{
                        width: 175,
                    }}
                >
                    {responseData.map((item, index) => (
                        <div key={index}>
                            <picture>
                                <Image
                                    src={item.image}
                                    width={175}
                                    height={250}
                                    alt=""
                                />
                            </picture>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}
