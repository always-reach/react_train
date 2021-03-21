let dom =document.querySelector('#root')

let element=React.createElement(
    'div',{},[
        React.createElement(
            'h2',{},"Hello!!"),
            React.createElement(
                'h4',{className:'alert alert-primary'},"React sample page."
                ),
            React.createElement('ul',{className:'list-group'},[
                React.createElement('li',{className:'list-group-item'},'First Item'),
                React.createElement('li',{className:'list-group-item'},'Second Item'),
                React.createElement('li',{className:'list-group-item'},'Thirt Item')
            ])
    ]
)

ReactDOM.render(element,dom)