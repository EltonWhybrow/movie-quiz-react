import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';// import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';


function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Movie Quiz</h1>
        <p>Select a movie you think the actor shown has been in</p>
      </div>
    </div>
  );
}

function Turn({ actor, movies, highlight, onAnswerSelected }) {
  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    }
    return mapping[highlight];
  }

  return (<div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
    <div className="col-4 offset-1">
      <img src={actor.imageUrl} className="actorimage" alt="Actor" />
    </div>
    <div className="col-6">
      {movies.map((title) => <Movie title={title} key={title} onClick={onAnswerSelected} />)}
    </div>
  </div >)
}

Turn.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
};

function Movie({ title, onClick }) {
  return (<div className="answer" onClick={() => { onClick(title); }}>
    <h4>{title}</h4>
  </div>)
}

function Continue({ show, onContinue }) {
  return (
    <div className="row continue">
      {show
        ? <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        </div>
        : null}
    </div>
  )
}

function Footer() {
  return (<div id="footer " className="row">
    <p className="col-10 offset-1">All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page"> Wikimedia  Commons </a> and are in the public domain.</p>
  </div>)
}


function MovieQuiz({ turnData, highlight, onAnswerSeleted, onContinue }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSeleted} />
      <Continue show={highlight === 'correct'} onContinue={onContinue} />
      <p><Link to="/add">Add a Actor</Link></p>
      <Footer />
    </div>
  );
}

export default MovieQuiz;
