/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function reConstructBinaryTree(pre, vin) {
  // write code here
 if(pre.length===0||vin.length===0){
　　return null;
}

  　var index=vin.indexOf(pre[0]);          //找到根节点
　　var left=vin.slice(0,index);               //左子树的中序序列
　　var right=vin.slice(index+1)            //右子树的中序遍历
　　var node=new TreeNode(pre[0])    
　　node.left=reConstructBinaryTree(pre.slice(1,index+1),left)
　　node.right=reConstructBinaryTree(pre.slice(index+1),right)
　　return node;
}

let pre = [1,2,4,7,3,5,6,8]
let vin = [4,7,2,1,5,3,8,6]
reConstructBinaryTree(pre, vin)