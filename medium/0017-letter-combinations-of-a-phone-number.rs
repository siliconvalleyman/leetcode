impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        if digits.is_empty() {
            return Vec::new();
        }

        // Map each digit to its corresponding letters.
        let mapping = [
            "", "", "abc", "def", "ghi",
            "jkl", "mno", "pqrs", "tuv", "wxyz",
        ];

        let mut result = Vec::new();
        let mut current = String::new();

        // Generate all possible letter combinations.
        fn backtrack(
            digits: &[u8],
            index: usize,
            mapping: &[&str; 10],
            current: &mut String,
            result: &mut Vec<String>,
        ) {
            // Store the completed combination.
            if index == digits.len() {
                result.push(current.clone());
                return;
            }

            let digit = (digits[index] - b'0') as usize;

            for letter in mapping[digit].chars() {
                current.push(letter);

                backtrack(
                    digits,
                    index + 1,
                    mapping,
                    current,
                    result,
                );

                // Undo the choice to explore other combinations.
                current.pop();
            }
        }

        backtrack(
            digits.as_bytes(),
            0,
            &mapping,
            &mut current,
            &mut result,
        );

        result
    }
}