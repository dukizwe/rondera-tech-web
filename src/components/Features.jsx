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
                                                                      Nous vous fournissons des techniciens spécialisés
                                                                      dans leurs domaines pour vous dépanner
                                                                      correctement et rapidement
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
                                                                      Ne vous souciez pas de votre position,
                                                                      Rondera cherche un technicien proche et vous
                                                                      rejoint n'importe où vous êtes.
                                                            </p>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}