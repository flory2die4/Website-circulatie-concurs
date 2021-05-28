from . import db 

class Quizz(db.Model):
    question = db.Column(db.String(200))
    correct_answear = db.Column(db.String(100))
    type = db.Column(db.String(20))
    answear1 = db.Column(db.String(100))
    answear2 = db.Column(db.String(100))
    answear3 = db.Column(db.String(100))
    answear4 = db.Column(db.String(100))