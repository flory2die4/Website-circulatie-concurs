from flask import Blueprint, json, jsonify

views = Blueprint('views', __name__) 

@views.route('/quizzes')
def get_all_quizzes():
    return {'12': '1'}
    