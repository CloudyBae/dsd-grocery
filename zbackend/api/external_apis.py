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



def get_recipes_complex_search(query_params):
    api_key = os.getenv("SPOONACULAR_API_KEY")
    base_url = "https://api.spoonacular.com/recipes/complexSearch?"
    params = {
        'apiKey': api_key,
        **query_params
    }
    
    try:
        response = requests.get(base_url, params=params)
        print(response)
        if response.status_code == 200:
            return response.json()
        else:
            print(f'Failed to retrieve recipes. Status code: {response.status_code}')
            return None
    except requests.RequestException as e:
        print(f'Error making request: {e}')
        return None
