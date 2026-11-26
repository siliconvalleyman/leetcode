impl Solution {
    pub fn can_alice_win(n: i32) -> bool {
        let mut stones = n;
        let mut remove = 10;
        let mut alice_turn = true;

        // Simulate the game until a player cannot make a move.
        while stones >= remove && remove > 0 {
            stones -= remove;
            remove -= 1;

            // Switch to the other player.
            alice_turn = !alice_turn;
        }

        // The player who cannot make a move loses.
        return !alice_turn;
    }
}