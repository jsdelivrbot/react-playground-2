class API::V1::CategoriesController < API::V1::BaseController
  def index
    render json: ::Category.all, each_serializer: API::V1::CategorySerializer
  end

  def create
    API::V1::Category::Create.new(::Category).call(category_params) do |m|
      m.success do |category|
        render json: category, serializer: API::V1::CategorySerializer, status: :created
      end

      m.failure do |errors|
        render json: errors, status: :unprocessable_entity
      end
    end
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end
end