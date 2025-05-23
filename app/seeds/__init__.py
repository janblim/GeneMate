from flask.cli import AppGroup
from .users import seed_users, undo_users
from .books import seed_books, undo_books
from .comments import seed_comments, undo_comments
from .favBooks import seed_favBooks, undo_favBooks
from .posts import seed_posts, undo_posts
from .ups import seed_ups, undo_ups

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below

        undo_ups()
        undo_comments()
        undo_posts()
        undo_favBooks()
        undo_books()
        undo_users()


    seed_users()
    seed_books()
    seed_favBooks()
    seed_posts()
    seed_comments()
    seed_ups()



    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_ups()
    undo_posts()
    undo_comments()
    undo_favBooks()
    undo_books()
    undo_users()
    # Add other undo functions here
