const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"药品单位管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryDanwei"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"药品类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYaopin"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"药品信息管理",
                        "menuJump":"列表",
                        "tableName":"yaopin"
                    }
                ],
                "menu":"药品信息管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除"
			            ],
			            "menu":"药品取退记录管理",
			            "menuJump":"列表",
			            "tableName":"quyaojilu"
			        }
			    ],
			    "menu":"药品取退记录管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"出入库管理",
                        "menuJump":"列表",
                        "tableName":"yaopinChuruInout"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"出入库详情管理",
                        "menuJump":"列表",
                        "tableName":"yaopinChuruInoutList"
                    }
                ],
                "menu":"出入库管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	       ,{
	           "child":[
	               {
	                   "buttons":[
	                       "查看"
	                   ],
	                   "menu":"药品信息管理",
	                   "menuJump":"列表",
	                   "tableName":"yaopin"
	               }
	           ],
	           "menu":"药品信息管理"
	       }
	       ,{
	           "child":[
	               {
	                   "buttons":[
	                       "查看",
	                       "新增"
	                   ],
	                   "menu":"出入库管理",
	                   "menuJump":"列表",
	                   "tableName":"yaopinChuruInout"
	               }
	               ,
	               {
	                   "buttons":[
	                       "查看"
	                   ],
	                   "menu":"出入库详情管理",
	                   "menuJump":"列表",
	                   "tableName":"yaopinChuruInoutList"
	               }
	           ],
	           "menu":"出入库管理"
	       }
		   ,{
		       "child":[
		           {
		               "buttons":[
		                   "查看",
		                   "新增",
		                   "删除"
		               ],
		               "menu":"药品取退记录管理",
		               "menuJump":"列表",
		               "tableName":"quyaojilu"
		           }
		       ],
		       "menu":"药品取退记录管理"
		   }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"用户管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"用户管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"员工",
	    "tableName":"yuangong"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                    ],
	                    "menu":"药品信息管理",
	                    "menuJump":"列表",
	                    "tableName":"yaopin"
	                }
	            ],
	            "menu":"药品信息管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			            ],
			            "menu":"药品取退记录管理",
			            "menuJump":"列表",
			            "tableName":"quyaojilu"
			        }
			    ],
			    "menu":"药品取退记录管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"用户",
	    "tableName":"yonghu"
	}
]
    }
}
export default menu;