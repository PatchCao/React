// var HelloWorld = React.createClass({
//     render: function() {
//         return (
//             <p>
//                 Hello, <input type="text" placeholder="Your name here" />
//                 It is {this.props.date.toTimeString()}
//             </p>
//         );
//     }
// });

// setInterval(function() {
//     ReactDOM.render(
//         <HelloWorld date={new Date()} />,
//         document.getElementById('example')
//     );
// },500);

// var child1 = React.createElement('li', null, 'First Text Content');
// var child2 = React.createElement('li', null, 'Second Text Content');
// var root = React.createElement('ul', {className: 'my-list'}, child1, child2);

// ReactDOM.render(root, document.getElementById('example'));

class likeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({liked: !this.state.liked});
    }
    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div onClick=
        )
    }
}
