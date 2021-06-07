from flask import Blueprint, json, jsonify, requests
from .models import Quizz
from . import db

views = Blueprint('views', __name__) 

@views.route('/quizzes', methods=['GET'])
def get_all_quizzes():
    return {"ok": '200'}

@views.route('/add-question', methods=['PUT'])