import '../css/home/techCounts.scss'
export default function TechCounts() {
          return (
                    <div className="counts">
                              <div className="counts__container">
                                                  <h1 className="text-center">Retrouver 5000+ techniciens facilement en seulement un appel</h1>
                                        <div className="counts__list">
                                                  <div className="count">
                                                            <div className="image">
                                                                      <img src='/images/plomberie1.png' />
                                                            </div>
                                                            <div className="text">
                                                                      <div className="number">3429</div>
                                                                      <div className="title">Plombiers</div>
                                                            </div>
                                                  </div>
                                                  <div className="count">
                                                            <div className="image">
                                                                      <img src='/images/mecanicien.png' />
                                                            </div>
                                                            <div className="text">
                                                                      <div className="number">1465</div>
                                                                      <div className="title">Mécaniciens</div>
                                                            </div>
                                                  </div>
                                                  <div className="count">
                                                            <div className="image">
                                                                      <img src='/images/frigo.png' />
                                                            </div>
                                                            <div className="text">
                                                                      <div className="number">887</div>
                                                                      <div className="title">Frigoristes</div>
                                                            </div>
                                                  </div>
                                                  <div className="count">
                                                            <div className="image">
                                                                      <img src='/images/soudeur.png' />
                                                            </div>
                                                            <div className="text">
                                                                      <div className="number">456</div>
                                                                      <div className="title">Soudeurs</div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}