from flask import Blueprint, json, jsonify, request
from .models import Quizz
from . import db

views = Blueprint('views', __name__) 

@views.route('/quizzes', methods=['GET'])
def get_all_quizzes():
    return {"ok": '200'}

@views.route('/add-question', methods=['PUT'])
def add_question():
    data = request.get_json()
    