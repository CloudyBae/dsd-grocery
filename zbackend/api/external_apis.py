import requests
import os


def get_recipes_by_dietary_preferences(dietary_preferences):
    api_key = os.getenv("SPOONACULAR_API_KEY")
    endpoint = "https://api.spoonacular.com/recipes/complexSearch?"
    params = {"apiKey": api_key, "diet": dietary_preferences, "number": "10"}
    response = requests.get(endpoint, params=params)
    data = response.json()

    return data


def get_recipe_information(recipe_id):
    api_key = os.getenv("SPOONACULAR_API_KEY")
    endpoint = f"https://api.spoonacular.com/recipes/{recipe_id}/information"
    params = {"apiKey": api_key}
    response = requests.get(endpoint, params=params)
    data = response.json()
    return data


def get_recipe_summary(recipe_id):
    api_key = os.getenv("SPOONACULAR_API_KEY")
    endpoint = f"https://api.spoonacular.com/recipes/{recipe_id}/summary"
    params = {"apiKey": api_key}
    response = requests.get(endpoint, params=params)
    data = response.json()
    return data


def get_ingredient_by_search(query):
    api_key = os.getenv("SPOONACULAR_API_KEY")
    endpoint = "https://api.spoonacular.com/food/ingredients/search"
    params = {"apiKey": api_key, "query": query, "number": "10"}
    response = requests.get(endpoint, params=params)
    data = response.json()
    return data


def get_ingredient_information(ingredient_id):
    api_key = os.getenv("SPOONACULAR_API_KEY")
    endpoint = (
        f"https://api.spoonacular.com/food/ingredients/{ingredient_id}/information"
    )
    params = {"apiKey": api_key}
    response = requests.get(endpoint, params=params)
    data = response.json()
    return data


def get_nutrition_information(recipe_id):
    api_key = os.getenv("SPOONACULAR_API_KEY")
    endpoint = f"https://api.spoonacular.com/recipes/{recipe_id}/nutritionWidget.json"
    params = {"apiKey": api_key}
    response = requests.get(endpoint, params=params)
    data = response.json()
    return data
