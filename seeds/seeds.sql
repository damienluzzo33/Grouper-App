USE grouper_db;

INSERT INTO Events (id, event_date, start_time, end_time, eventCategory, user_id)
VALUES
    ("1234, 10/01/2021, 5:00 PM, 6:00 PM, Poker_Night, 1"),
    ("12345, 10/01/2021, 9:00 PM, 11:00 PM, Poker_Night, 2"),
    ("123456, 10/01/2021, 4:00 PM, 6:00 PM, Poker_Night, 3"),
    ("1234567, 10/01/2021, 3:00 PM, 6:00 PM, Poker_Night, 4"),
    ("12345678, 10/01/2021, 1:00 PM, 6:00 PM, Poker_Night, 5");

INSERT INTO Users (email, userPassword, userName)
VALUES
    ("funkytown@gmail.com, password1, funkytown123"),
    ("codebootcamp@gmail.com, password12, codebootcamp123"),
    ("fortune8764@gmail.com, password13, fortune123");