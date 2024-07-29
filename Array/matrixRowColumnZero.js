// matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
function solve(matrix) {

    var arr = [];

    for (let i = 0; i < matrix.length; i++) {
        var mat = matrix[i]
        for (let j = 0; j < mat.length; j++) {
            if (mat[j] == 0) {
                index = j;
                arr.push(index)
            }
        }
    }

    for (let x = 0; x < arr.length; x++) {
        for (let k = 0; k < matrix.length; k++) {
            var mat = matrix[k]
            for (let l = 0; l < mat.length; l++) {

                if (k == arr[x] || l == arr[x]) {
                    mat[l] = 0
                }
            }
        }
    }
    return matrix;
}

var ans = solve(matrix);
console.log(ans)
