import React from "react";
import "./AddActorForm.css";

class ActorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imageUrl: "",
            movies: [],
            movieTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddMovie = this.handleAddMovie.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddActor(this.state);
    }

    handleAddMovie(event) {
        this.setState({
            movies: this.state.movies.concat([this.state.movieTemp]),
            movieTemp: ''
        });
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="AddActorForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
            </div>

            <div className="AddActorForm__input">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}></input>
            </div>

            <div className="AddActorForm__input">
                <label htmlFor="movieTemp">Movies</label>
                {this.state.movies.map((movie) => <p key={movie}>{movie}</p>)}
                <input type="text" name="movieTemp" value={this.state.movieTemp} onChange={this.onFieldChange}></input>
                <input type="button" value="+" onClick={this.handleAddMovie} />
            </div>

            <input type="submit" value="Add" />

        </form>
    }
}

function AddActorForm({ onAddActor }) {
    return <div className="AddActorForm">
        <h1>Add Actor</h1>
        <ActorForm onAddActor={onAddActor} />
    </div>;
}

export default AddActorForm;