import '../css/home/features.scss'
import Lottie from "react-lottie-player";
import deliveryBoy from '../lotties/75701-delivery-boy-animation.json'
import address from '../lotties/69149-adress.json'
export default function Features() {
          return (
                    <div className="features__container">
                              <div className="features">
                                        <div className="feature">
                                                  <div className="lottie">
                                                            <Lottie
                                                                      animationData={deliveryBoy}
                                                                      style={{background:"transparent", height: "100%" }} 
                                                                      loop
                                                                      play
                                                            />
                                                  </div>
                                                  <div className="text">
                                                            <h3>Des techniciens fiables</h3>
                                                            <p>
                                                                      Afin d'offrir un service de qualité à ses clients, Rondera! s'assure
                                                                      systématiquement de la fiabilité de chacun des artisans membre de son réseau.
                                                            </p>
                                                  </div>
                                        </div>
                                        <div className="feature">
                                                  <div className="lottie">
                                                            <Lottie
                                                                      animationData={address}
                                                                      style={{background:"transparent", height: '100%'}} 
                                                                      loop
                                                                      play
                                                            />
                                                  </div>
                                                  <div className="text">
                                                            <h3>N'importe où vous êtes</h3>
                                                            <p>
                                                                      En urgence ou sur rendez-vous, l'artisan se présente où vous êtes pour résoudre votre problème
                                                            </p>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}