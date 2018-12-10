import React from "react"
import { Link, Route } from "react-router-dom";
import LearnMore from './LearnMore'

const Home = (props) => {
    console.log(props.match.path)
    return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem doloribus quaerat ipsum, illo eum facere asperiores? Ut, eum consectetur quaerat dolores molestias rerum aut voluptatem inventore totam, dolor molestiae accusamus?</p>
                <Link to='/home/learnmore'>Learn more</Link>
                <Route path='/home/learnmore' component={LearnMore} />

            </div>
    )
}


export default Home