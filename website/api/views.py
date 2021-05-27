from flask import Blueprint, json, jsonify

views = Blueprint('views', __name__) 

@views.route('/haha')
def haha():
    return jsonify({'12': '1'})
    