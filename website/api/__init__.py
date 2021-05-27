from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'asdfhjk'

    from .views import views

    app.register_blueprint(views, url_prefix='/api')

    return app