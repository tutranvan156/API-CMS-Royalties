define({ "api": [
  {
    "type": "post",
    "url": "cms/articles/loadall",
    "title": "- Load all article from database",
    "group": "ArticleTypeGroup",
    "version": "1.0.0",
    "permission": [
      {
        "name": "cms.article\nWill return list of all ArticleType"
      }
    ],
    "filename": "cms-royalties/src/main/java/com/inet/service/ArticleType/LoadAllArticleService.java",
    "groupTitle": "Manage: ArticleType",
    "name": "PostCmsArticlesLoadall"
  },
  {
    "type": "post",
    "url": "cms/articles/remove",
    "title": "- Remove one Article",
    "group": "ArticleTypeGroup",
    "version": "1.0.0",
    "permission": [
      {
        "name": "cms.article"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>the uuid of Article</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "uuid-must-not-empty",
            "description": "<p>The <code>uuid</code> must not empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error format:",
          "content": "{\n  field: 'uuid', code:'must_not_empty'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "cms-royalties/src/main/java/com/inet/service/ArticleType/RemoveArticleTypeService.java",
    "groupTitle": "Manage: ArticleType",
    "name": "PostCmsArticlesRemove"
  },
  {
    "type": "post",
    "url": "cms/articles/save",
    "title": "- Add or save new Article",
    "group": "ArticleTypeGroup",
    "version": "1.0.0",
    "permission": [
      {
        "name": "cms.article"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>the uuid of Article</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>is the name of article</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "factor",
            "description": "<p>is the name of article</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvt",
            "description": "<p>is the name of article</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "uuid-must-not-empty",
            "description": "<p>The <code>uuid</code> must not empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name-must-not-empty",
            "description": "<p>The <code>name</code> must not empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "factor-must-not-empty",
            "description": "<p>The <code>factor</code> must not empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "dvt-must-not-empty",
            "description": "<p>The <code>dvt</code> must not empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error format:",
          "content": "{\nfield: 'uuid', code:'must_not_empty'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "cms-royalties/src/main/java/com/inet/service/ArticleType/SaveArticleTypeService.java",
    "groupTitle": "Manage: ArticleType",
    "name": "PostCmsArticlesSave"
  },
  {
    "type": "",
    "url": "cms/principles/update",
    "title": "- Update Principle",
    "group": "RoyaltiesPrinciple",
    "version": "1.0.0",
    "filename": "cms-royalties/src/main/java/com/inet/service/RoyaltiesPrinciple/UpdatePrincipleService.java",
    "groupTitle": "RoyaltiesPrinciple",
    "name": "CmsPrinciplesUpdate"
  },
  {
    "type": "post",
    "url": "cms/principles/loadall",
    "title": "- Load all Principle",
    "group": "RoyaltiesPrincipleGroup",
    "version": "1.0.0",
    "filename": "cms-royalties/src/main/java/com/inet/service/RoyaltiesPrinciple/LoadPrincipleService.java",
    "groupTitle": "RoyaltiesPrincipleGroup",
    "name": "PostCmsPrinciplesLoadall"
  },
  {
    "type": "",
    "url": "cms/royalties/loadsalary",
    "title": "- Load Salary to show up",
    "group": "SalaryGroup",
    "version": "1.0.0",
    "filename": "cms-royalties/src/main/java/com/inet/service/Salary/LoadSalaryService.java",
    "groupTitle": "SalaryGroup",
    "name": "CmsRoyaltiesLoadsalary"
  },
  {
    "type": "",
    "url": "cms/royalties/updatesalary",
    "title": "- Update Salary to show up",
    "group": "SalaryGroup",
    "version": "1.0.0",
    "filename": "cms-royalties/src/main/java/com/inet/service/Salary/UpdateSalaryService.java",
    "groupTitle": "SalaryGroup",
    "name": "CmsRoyaltiesUpdatesalary"
  }
] });
