"use strict";
var MyworkspaceModule = MyworkspaceModule || {};
MyworkspaceModule.Load = function () {
var MyCollaborationsgroup = React.createClass({
    displayName: "MyCollaborationsgroup",
    rendercollaborationssubgroup: function rendercollaborationssubgroup() {
        var feeds = this.props.appitem.feeds;
        var properties = Object.keys(feeds).map(function (k, idx) {
            return React.createElement(MyCollaborationssubgroup, { appfeeditem: feeds[k], key: idx });
        });
        return properties;
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "col-md-4 col-sm-4 col-xs-6" },
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
                    React.createElement(
                        "div",
                        { className: "stdicon" },
                        this.props.appitem.Name
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "stdtitle" },
                    React.createElement(
                        "a",
                        { href: "9_division_infantry.html" },
                        this.props.appitem.Name
                    ),
                    React.createElement(
                        "div",
                        { className: "createdby" },
                        " ",
                        this.props.appitem.createdby
                    )
                ),
                React.createElement(
                    "div",
                    { className: "mycollaborationsgroup" },
                    React.createElement(
                        "div",
                        { className: "mycollaborationssubgroup" },
                        this.rendercollaborationssubgroup()
                    )
                )
            )
        );
    }
});

var MyCollaborationssubgroup = React.createClass({
    displayName: "MyCollaborationssubgroup",
    render: function render() {
        return React.createElement(
            "div",
            { className: "item" },
            React.createElement(
                "div",
                { className: "leftcol" },
                React.createElement(
                    "a",
                    null,
                    React.createElement("img", { src: "#" })
                )
            ),
            React.createElement(
                "div",
                { className: "rightcol" },
                React.createElement(
                    "h5",
                    { className: "shorttitle" },
                    this.props.appfeeditem.title
                ),
                React.createElement(
                    "p",
                    { className: "timeago" },
                    this.props.appfeeditem.timeago
                )
            )
        );
    }
});

var MyCollaborations = React.createClass({
    displayName: "MyCollaborations",

    mixins: [
    //required
    ComponentVisibilityMixin],
    getInitialState: function getInitialState() {
        // returning sample data before the actual is retrieved via fetch
        return {
            promodata: [{ "Sites": [{
                    "Name": "9th Division/Infantry",
                    "Type": "Site",
                    "createdby": "created by 9th Division/Infantry",
                    "feeds": [{
                        "Title": "Laura uploaded   ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_3.jpg"
                    }, {
                        "Title": "Lisa uploaded    ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_1.jpg"
                    }, {
                        "Title": "Steven Modified   ",
                        "timeago": "30 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_2.jpg"
                    }]
                }, {
                    "Name": "Finance",
                    "Type": "CoP",
                    "createdby": "created by Defence Finance Organisation",
                    "feeds": [{
                        "Title": "Laura uploaded   ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_3.jpg"
                    }, {
                        "Title": "Lisa uploaded    ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_1.jpg"
                    }, {
                        "Title": "Steven Modified   ",
                        "timeago": "30 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_2.jpg"
                    }]
                }, {
                    "Name": "MINDEF Intranet Revamp",
                    "Type": "PROJECT",
                    "createdby": "created by MIWG",
                    "feeds": [{
                        "Title": "Laura uploaded   ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_3.jpg"
                    }, {
                        "Title": "Lisa uploaded    ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_1.jpg"
                    }, {
                        "Title": "Steven Modified   ",
                        "timeago": "30 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_2.jpg"
                    }]
                }, {
                    "Name": "SAF Day Parade 2017",
                    "Type": "PROJECT",
                    "createdby": "created by JOINT",
                    "feeds": [{
                        "Title": "Laura uploaded   ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_3.jpg"
                    }, {
                        "Title": "Lisa uploaded    ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_1.jpg"
                    }, {
                        "Title": "Steven Modified   ",
                        "timeago": "30 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_2.jpg"
                    }]
                }, {
                    "Name": "Joint Trip Budgetary Report",
                    "Type": "AD-HOC",
                    "createdby": "created by Tan Kah Kee",
                    "feeds": [{
                        "Title": "Laura uploaded   ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_3.jpg"
                    }, {
                        "Title": "Lisa uploaded    ",
                        "timeago": "0 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_1.jpg"
                    }, {
                        "Title": "Steven Modified   ",
                        "timeago": "30 min ago",
                        "imgsrc": "/Style%20Library/mindef/img/face_2.jpg"
                    }]
                }]
            }]
        };
    },
    retrieveFromWebService: function retrieveFromWebService() {
        var that = this;
        var url = 'MyWorkSpace.json';
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
    rendercollaborationsgroup: function rendercollaborationsgroup() {

        var Sites = this.state.promodata[0].Sites;

        var properties = Object.keys(Sites).map(function (k, idx) {
            return React.createElement(MyCollaborationsgroup, { appitem: Sites[k], key: idx });
        });
        return properties;
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
                    "My Work Space"
                ),
                React.createElement(
                    "div",
                    { className: "all" },
                    React.createElement(
                        "a",
                        { href: "collaborations.html" },
                        "ALL"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "mycollaborationsbox multiple-items" },
                this.rendercollaborationsgroup()
            )
        );
    }
});

ReactDOM.render(React.createElement(MyCollaborations, null), document.getElementById('mycollaborations'));
};