import React, {Component} from 'react'
import './App.css'

import Letter from "./components/Letter"
import Button from "./components/Button"
import Pendu from "./components/Pendu"
import HallOfFame from "./components/HallOfFame"
import HighScoreInput from "./components/HighScoreInput"

class App extends Component {

    state = {
        word: '',
        gameState: 'start',
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''),
        checkedLetters: [],
        hallOfFame: null,
        step: 0,
        clicks: 0
    }

    playLetter = (letter) => {
        const {word, checkedLetters, step, gameState, clicks} = this.state
        if (!checkedLetters.includes(letter) && gameState === 'play') {
            if (word.includes(letter)) {
                this.setState({
                    checkedLetters: [...checkedLetters, letter]
                })
            } else {
                this.setState({
                    checkedLetters: [...checkedLetters, letter],
                    step: step + 1
                })
            }
            // Fix for update problems
            if (step+1 === 10) {
                this.setState({gameState: 'perdu'})
            } else if (!this.computeDisplay([...checkedLetters, letter]).includes('_')) {
                this.setState({gameState: 'gagné'})
            }
        }
        this.setState({clicks: clicks+1})
    }

    getStatusLetter(letter) {
        const {checkedLetters, gameState} = this.state
        if (checkedLetters.includes(letter) || gameState !== "play") {
            return 'clicked'
        }
        return 'not_clicked'
    }

    setWord = event => {
        this.setState({word: event.target.value.toUpperCase()})
    }

    computeDisplay(checkedLetters) {
        checkedLetters = typeof checkedLetters !== 'undefined' ? checkedLetters : this.state.checkedLetters;
        const {word, gameState} = this.state
        if(gameState!=="play"){
            return word
        }
        return word.replace(/\w/g, (letter) => (checkedLetters.includes(letter) ? letter : '_'))
    };

    playGame = () => {
        const {word} = this.state
        if (word.includes('_') || word.length === 0) {
            alert("Le mot choisit est invalide, veuillez le modifier")
            return
        }
        this.setState({
            gameState: 'play'
        })
    }

    // Arrow fx for binding
    displayHallOfFame = (hallOfFame) => {
        this.setState({hallOfFame})
    }

    render() {
        const {alphabet, gameState, hallOfFame, clicks, step} = this.state
        return (
            <div className={`pendu ${gameState}`}>
                <h1>Jeu du pendu</h1>
                {gameState === 'start' && (
                    <div className="content">
                        <form className="wordToFind" onSubmit={this.playGame}>
                            <p>Insérer le texte à faire deviner :</p>
                            <input type="text" value={this.state.word} onChange={this.setWord}/>
                            <button type="submit">Démarrer</button>
                        </form>
                    </div>
                )}
                {gameState !== 'start' && (
                    <div className="content">
                        <div className="word">{this.computeDisplay()}</div>
                        {alphabet.map((letter, index) => (
                            <Letter
                                letter={letter}
                                status={this.getStatusLetter(letter)}
                                index={index}
                                key={index}
                                onClick={this.playLetter}
                            />
                        ))}
                    </div>
                )}
                {gameState !== 'start' && (
                    <div className="display">
                        <p>Nombre d'essais restants : {10 - step}</p>
                        <Pendu width="300" height="400" step={step}/>
                    </div>
                )}
                {(gameState !== 'start' && gameState !== 'play') && (
                    <div className="result">
                        {hallOfFame ? (
                            <React.Fragment>
                                <HallOfFame entries={hallOfFame}/>
                                <Button button="Rejouer" onClick={() => window.location.reload(false)}/>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <div className="word">Vous avez {gameState} !</div>
                                {gameState==="gagné" ? (
                                    <React.Fragment>
                                        <HighScoreInput guesses={clicks} onStored={this.displayHallOfFame} />
                                    </React.Fragment>
                                    ) : (
                                    <Button button="Réessayer" onClick={() => window.location.reload(false)}/>
                                )}
                            </React.Fragment>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default App
