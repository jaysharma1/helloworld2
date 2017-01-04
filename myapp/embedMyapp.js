"use strict";
 var myappmodule = myappmodule || {};
myappmodule.Load = function () {
"use strict";
var MyApp = React.createClass({
    displayName: "MyApp",
    render: function render() {
        return React.createElement(
            "div",
            { className: "item match-height" },
            React.createElement(
                "div",
                { className: "leftcol" },
                React.createElement(
                    "a",
                    { href: "myapps_goms.html" },
                    React.createElement("img", { src: this.props.appitem.ImageUrl })
                )
            ),
            React.createElement(
                "div",
                { className: "rightcol" },
                React.createElement(
                    "h5",
                    null,
                    React.createElement(
                        "a",
                        { href: "myapps_goms.html" },
                        this.props.appitem.Title
                    )
                )
            )
        );
    }
});

var MyAppdata = React.createClass({
    displayName: "MyAppdata",

    mixins: [
    //required
    ComponentVisibilityMixin],
    getInitialState: function getInitialState() {
        // returning sample data before the actual is retrieved via fetch
        return {
            promodata: [{ "Url": "myapps_goms.html", "ImageUrl": "/Style%20Library/mindef/img/myapps-1.png", "Title": "GOMs, Directives & Circulars" }, { "Url": "myapps_gomss.html", "ImageUrl": "/Style%20Library/mindef/img/myapps-2.png", "Title": "Athena" }, { "Url": "myapps_gosms.html", "ImageUrl": "/Style%20Library/mindef/img/myapps_3.png", "Title": "e-HR" }, { "Url": "myapps_goams.html", "ImageUrl": "/Style%20Library/mindef/img/myapps_4.png", "Title": "AOR for Overseas Travel Workflow" }, { "Url": "myapps_agoms.html", "ImageUrl": "/Style%20Library/mindef/img/myapps_5.png", "Title": "Electronic Procurement System" }, { "Url": "myapps_gaosms.html", "ImageUrl": "/Style%20Library/mindef/img/myapps_6.png", "Title": "Help Me" }, { "Url": "myapps_gaoms.html", "ImageUrl": "/Style%20Library/mindef/img/myapps_7.png", "Title": "iWADS" }, { "Url": "myapps_agoms.html", "ImageUrl": "/Style%20Library/mindef/img/myapps_8.png", "Title": "Suggestions / WITS (InnoBank)" }]
        };
    },
    retrieveFromWebService: function retrieveFromWebService() {
        var that = this;
        var url = 'myapp.json';
        fetch(url).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            that.setState({ promodata: data });
        });
    },
    componentVisibilityChanged: function componentVisibilityChanged() {
        console.log('scroll into view');
        this.retrieveFromWebService();
        // once we get the value once, we don't need to use this anymore
        this.disableVisibilityHandling();
    },
    renderPromotions: function renderPromotions() {
        return this.state.promodata.map(function (promoitem, idx) {
            return React.createElement(MyApp, { appitem: promoitem, key: idx });
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "col-md-12" },
            React.createElement(
                "div",
                { className: "headingtitlebox" },
                React.createElement(
                    "h2",
                    { className: "headingtitle" },
                    "My Apps"
                ),
                React.createElement(
                    "div",
                    { className: "all" },
                    React.createElement(
                        "a",
                        { href: "#" },
                        "ALL"
                    ),
                    "\xA0\xA0",
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("i", { className: "fa fa-gear" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "col-md-12 myappsbox" },
                React.createElement(
                    "div",
                    { className: "stdbox" },
                    React.createElement(
                        "div",
                        { className: "stdbar" },
                        "\xA0"
                    ),
                    React.createElement(
                        "div",
                        { className: "stdiconbox" },
                        React.createElement("div", { className: "stdicon glyphicon glyphicon-th" })
                    ),
                    React.createElement(
                        "div",
                        { className: "myappsgroup" },
                        React.createElement(
                            "div",
                            { className: "myapps-multiple-items" },
                            this.renderPromotions()
                        )
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(MyAppdata, null), document.getElementById('myapproot'));
};