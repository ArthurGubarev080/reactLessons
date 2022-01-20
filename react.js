function Car(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.car.img} alt={props.car.name} />
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price}</p>
        </div>
    );
}

class App extends React.Component {
    state = {
        cars: [
            {
                name: "BMW M2 Coupe",
                price: 20000,
                img: "https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg",
            },
            {
                name: "Audi TT",
                price: 15000,
                img: "https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598",
            },
            {
                name: "Rolls Royse",
                price: 500000,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHUrQAdLTr9a9hbL8tz194Z4e0QgylvN2Gw&usqp=CAU",
            },
            {
                name: "Mercedes amg coupe",
                price: 48000,
                img: "https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2",
            },
        ],
        visible: true,
        appTitle: "Cars application",
    };

    handleMarked(name) {
        const cars = this.state.cars.concat();

        const car = cars.find((c) => c.name === name);
        car.marked = !car.marked;

        this.setState({ cars });
    }

    toggleHandler() {
        this.setState({ visible: !this.state.visible });
        console.log("working");
    }
    renderCars() {
        const btn = document.querySelector(".btn > span");
        btn.addEventListener("click", function () {
            btn.innerHTML =
                btn.innerHTML === "Показать всё"
                    ? (btn.innerHTML = "Скрыть всё")
                    : (btn.innerHTML = "Показать всё");
        });
    }
    renderCars() {
        if (this.state.visible) {
            return null;
        }

        return this.state.cars.map((car) => {
            return (
                <Car
                    car={car}
                    key={car.name + Math.random()}
                    onMark={this.handleMarked.bind(this, car.name)}
                />
            );
        });
    }

    titleChangeHandler(title) {
        this.setState({
            appTitle: title,
        });
    }

    render() {
        const style = {
            marginRight: 20,
        };
        return (
            <div className="app">
                <h1>{this.state.appTitle}</h1>
                <button
                    type="button"
                    class="btn btn-outline-success"
                    data-toggle="collapse"
                    data-target="#services"
                    id="show"
                    onClick={() => this.toggleHandler()}
                >
                    {this.state.visible ? "Раскрыть" : "Скрыть"}
                </button>
                <input
                    type="text"
                    style={style}
                    placeholder="Change title"
                    onChange={(event) =>
                        this.titleChangeHandler(event.target.value)
                    }
                />
                <hr />
                <div className="list">{this.renderCars()}</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
