<Route path="/products2">
                        <section>
                            <div>
                            {
                                items.reduce((product) => <DetailsProduct
                                    title={product.title}
                                    price={product.price}
                                    location={product.location}
                                    photo={product.thumbnail}
                                    key={product.id} /> )

                            }    
                            </div>    
                        </section>
                    </Route>