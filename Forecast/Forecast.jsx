import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import s from './Forecast.module.css'
import PreloaderCSS from '../assets/Preloader'

class Forecast extends React.Component {
    state = {
        isLoaded: false,
        error: null,
        symbol: 'a',
        items: []
    }

    componentDidMount() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.state.symbol}`)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result.drinks
                    })
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }

    letterInp = React.createRef();

    searchDrinks = () => {
        this.setState({
            symbol: this.letterInp.current.value
        })
    }
    getDrinks = () =>{
        if(this.state.symbol.length!=1){
            alert('Введите только первую букву латиницей, спасибо)')
        }else{
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${this.state.symbol}`)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result.drinks
                    })
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
        }
    }

    render() {
        const { isLoaded, error, items } = this.state;

        if (error) {
            return <p>something is wrong</p>
        } else if (!isLoaded) {
            return <PreloaderCSS/>
        } else {
            return <div >
                <input onChange={this.searchDrinks} ref={this.letterInp} value={this.state.symbol} placeholder='введите первую букву напитка' />
                <button onClick={this.getDrinks}>Получить</button>
                {
                    items.map(p => <div key={p.idDrink} className={s.item}>
                        <img className={s.img} src={p.strDrinkThumb} alt="is wrong" />
                        <div className={s.media}>
                            <h3>{p.strDrink}</h3>
                            <ol>
                                {p.strIngredient1 ? <li>{p.strIngredient1}</li> : null}
                                {p.strIngredient2 ? <li>{p.strIngredient2}</li> : null}
                                {p.strIngredient3 ? <li>{p.strIngredient3}</li> : null}
                                {p.strIngredient4 ? <li>{p.strIngredient4}</li> : null}
                                {p.strIngredient5 ? <li>{p.strIngredient5}</li> : null}
                                {p.strIngredient6 ? <li>{p.strIngredient6}</li> : null}
                                {p.strIngredient7 ? <li>{p.strIngredient7}</li> : null}
                                {p.strIngredient8 ? <li>{p.strIngredient8}</li> : null}
                                {p.strIngredient9 ? <li>{p.strIngredient9}</li> : null}
                                {p.strIngredient10 ? <li>{p.strIngredient10}</li> : null}
                                {p.strIngredient11 ? <li>{p.strIngredient11}</li> : null}
                                {p.strIngredient12 ? <li>{p.strIngredient12}</li> : null}
                            </ol>

                            <article className={s.inst}>
                                {p.strInstructions}
                            </article>

                        </div>
                    </div>)
                }
            </div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.authReducer.isAuthorized
    }
}

export const ForecastCont = connect(mapStateToProps)(withAuthRedirect(Forecast));
