(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{502:function(t,a,s){"use strict";s.r(a);var m=s(4),c=Object(m.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("  在美术人员建模的时候，通常会在建模软件中利用纹理展开技术把 "),s("strong",[t._v("纹理映射坐标(texture-mapping coordinates)")]),t._v(" 存储在每个顶点上。纹理映射坐标定义了该顶点在纹理中对应的2D坐标。通常，这些坐标使用一个二位变量(u,v)来表示，其中u是横向坐标，v是纵向坐标。因此，纹理映射坐标也被称为UV坐标。")]),t._v(" "),s("h2",{attrs:{id:"单张纹理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单张纹理"}},[t._v("#")]),t._v(" "),s("strong",[t._v("单张纹理")])]),t._v(" "),s("h3",{attrs:{id:"纹理声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纹理声明"}},[t._v("#")]),t._v(" "),s("strong",[t._v("纹理声明")])]),t._v(" "),s("p",[t._v("  在Shader的属性中，纹理的声明方式为："),s("br"),t._v(" "),s("center",[s("code",[t._v('_MainTex ("Main Tex", 2D) = "white" {}')])]),t._v("\n  2D是纹理属性的声明方式。“white”是内置纹理的名字，即一个全白的纹理。"),s("br"),t._v("\n  在CG代码中声明和属性相匹配的变量时，需要声明一个float4类型的变量"),s("code",[t._v("_MainTex_ST")]),t._v("，其中，ST是缩放(scale)和平移(translation)的缩写。"),s("code",[t._v("_MainTex_ST")]),t._v("可以让我们得到该纹理的缩放和平移(偏移)值，"),s("code",[t._v("_MainTex_ST.xy")]),t._v("存储的是缩放值，"),s("code",[t._v("_MainTex_ST.zw")]),t._v("存储的是偏移值。"),s("br"),t._v(" "),s("center",[s("img",{attrs:{src:"/pic/unityShaderBase/chapter7/chapter7_1.png",alt:"pic1",title:"纹理缩放偏移属性"}})])],1),t._v(" "),s("h3",{attrs:{id:"最终uv坐标的计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终uv坐标的计算"}},[t._v("#")]),t._v(" "),s("strong",[t._v("最终uv坐标的计算")])]),t._v(" "),s("p",[t._v("  首先我们通过定义"),s("code",[t._v("float4 texcoord : TEXCOORD0")]),t._v("获得模型的第一组纹理坐标，然后使用纹理属性值"),s("code",[t._v("_MainTex_ST")]),t._v("来对纹理左边进行变换，得到最终的纹理坐标。"),s("br"),t._v("\n  计算过程是，首先使用缩放属性"),s("code",[t._v("_MainTex_ST.xy")]),t._v("对顶点纹理坐标进行缩放，然后再使用偏移属性"),s("code",[t._v("_MainTex_ST.zw")]),t._v("对结果进行偏移。也可以使用Unity内置的宏"),s("code",[t._v("TRANSFORM_TEX")]),t._v("来计算上述过程。\n"),s("center",[s("code",[t._v("o.uv = v.texcoord.xy * _MainTex_ST.xy + _MainTex_ST.zw 或者 o.uv = TRANSFORM_TEX(v.texcoord, _MainTex_ST)")])])],1),t._v(" "),s("h3",{attrs:{id:"纹理采样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纹理采样"}},[t._v("#")]),t._v(" "),s("strong",[t._v("纹理采样")])]),t._v(" "),s("p",[t._v("  Cg的"),s("code",[t._v("tex2D")]),t._v("函数可以对纹理进行采样，它的第一个参数是需要被采样的纹理，第二个参数是一个"),s("code",[t._v("float2")]),t._v("类型的纹理坐标")]),t._v(" "),s("h3",{attrs:{id:"多级渐远纹理-mipmapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多级渐远纹理-mipmapping"}},[t._v("#")]),t._v(" "),s("strong",[t._v("多级渐远纹理(mipmapping)")])]),t._v(" "),s("p",[t._v("  纹理缩小的过程比放大复杂一些，此时原纹理中的多个像素将会对应一个目标像素。纹理缩小更加复杂的原因在于我们往往需要处理抗锯齿问题，多级渐远纹理技术可以解决这个问题。详细解释查看《Unity Shader入门精要》7.1.2（p144）。")]),t._v(" "),s("h2",{attrs:{id:"凹凸映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#凹凸映射"}},[t._v("#")]),t._v(" "),s("strong",[t._v("凹凸映射")])]),t._v(" "),s("p",[t._v("  凹凸映射的目的是使用一张纹理来修改模型表面的法线，以便为模型提供更多的细节。这种方法不会真的改变模型的顶点位置。"),s("br"),t._v("\n  有两种主要的方法可以用来进行凹凸映射：一种方法是使用一张 "),s("strong",[t._v("高度纹理(height map)")]),t._v(" 来模拟 "),s("strong",[t._v("表面位移(displacement)")]),t._v(" ,然后得到一个修改后的法线值，这种方法也被称为 "),s("strong",[t._v("高度映射(height mapping)")]),t._v(" (不常使用)；另一种方法则是使用一张 "),s("strong",[t._v("法线纹理(normal map)")]),t._v(" 来直接存储表面法线，这种方法又被称为 "),s("strong",[t._v("法线映射(normal mapping)")]),t._v(" (常使用)。")]),t._v(" "),s("h3",{attrs:{id:"法线纹理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#法线纹理"}},[t._v("#")]),t._v(" "),s("strong",[t._v("法线纹理")])]),t._v(" "),s("p",[t._v("  法线纹理中存储的就是表面法线方向。由于法线方向的分量范围在[-1, 1]，而像素的分量范围为[0, 1]，因为此我们需要做一个映射：\n"),s("center",[s("font",{attrs:{size:"5"}},[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"p"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mfrac",{attrs:{space:"4"}},[s("mjx-frac",[s("mjx-num",[s("mjx-nstrut"),s("mjx-mrow",{attrs:{size:"s"}},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"m"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line"),s("mjx-row",[s("mjx-den",[s("mjx-dstrut"),s("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v("\n  这样就需要我们在对法线纹理进行采样后，还需要对结果进行一次反映射，得到原法线方向。反映射实际上就是映射函数的逆函数：\n"),s("center",[s("font",{attrs:{size:"5"}},[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"o"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"m"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"a"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"p"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"l"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"D7"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"2"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"2212"}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)])}),[],!1,null,null,null);a.default=c.exports}}]);